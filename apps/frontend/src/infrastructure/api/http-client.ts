import type {
  ApiResponse,
  CartQuoteDto,
  CartQuoteRequest,
  ContactMessageDto,
  ContactSubmission,
  CustomOrderDto,
  CustomOrderRequest,
  ProductDto,
  ProductFilterQuery,
} from "@seahorse/shared";

const DEFAULT_API_BASE_URL = "http://localhost:4000/api/v1";

/**
 * Resolves the backend API base URL from NEXT_PUBLIC_API_URL,
 * stripping any trailing slash.
 */
function getApiBaseUrl(): string {
  const configured = process.env.NEXT_PUBLIC_API_URL?.trim();
  const base = configured && configured.length > 0 ? configured : DEFAULT_API_BASE_URL;
  return base.replace(/\/+$/, "");
}

/**
 * Error thrown when an API request fails or returns an error envelope.
 */
export class ApiClientError extends Error {
  readonly status: number;
  readonly code: string;
  readonly details?: unknown;

  constructor(message: string, status: number, code = "API_ERROR", details?: unknown) {
    super(message);
    this.name = "ApiClientError";
    this.status = status;
    this.code = code;
    this.details = details;
  }
}

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const url = `${getApiBaseUrl()}${path}`;
  const response = await fetch(url, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...init?.headers,
    },
  });

  const payload = (await response.json()) as ApiResponse<T>;

  if (!response.ok || !payload.success) {
    if (!payload.success) {
      throw new ApiClientError(
        payload.error.message,
        response.status,
        payload.error.code,
        payload.error.details
      );
    }
    throw new ApiClientError(
      `Request failed with status ${response.status}`,
      response.status
    );
  }

  return payload.data;
}

function buildProductsQuery(filters?: Partial<ProductFilterQuery>): string {
  if (!filters) {
    return "";
  }
  const params = new URLSearchParams();
  if (filters.category) params.set("category", filters.category);
  if (filters.search) params.set("search", filters.search);
  if (filters.maxPrice !== undefined) params.set("maxPrice", String(filters.maxPrice));
  if (filters.sort) params.set("sort", filters.sort);

  const query = params.toString();
  return query.length > 0 ? `?${query}` : "";
}

/**
 * Fetches the product catalog from the backend API.
 */
export async function getProducts(
  filters?: Partial<ProductFilterQuery>
): Promise<ProductDto[]> {
  return request<ProductDto[]>(`/products${buildProductsQuery(filters)}`, {
    method: "GET",
  });
}

/**
 * Requests a server-calculated cart quote (discounts, shipping, totals).
 */
export async function postCartQuote(body: CartQuoteRequest): Promise<CartQuoteDto> {
  return request<CartQuoteDto>("/cart/quote", {
    method: "POST",
    body: JSON.stringify(body),
  });
}

/**
 * Submits a custom order request to the backend API.
 */
export async function postCustomOrder(body: CustomOrderRequest): Promise<CustomOrderDto> {
  return request<CustomOrderDto>("/custom-orders", {
    method: "POST",
    body: JSON.stringify(body),
  });
}

/**
 * Submits a contact form message to the backend API.
 */
export async function postContactMessage(
  body: ContactSubmission
): Promise<ContactMessageDto> {
  return request<ContactMessageDto>("/contact", {
    method: "POST",
    body: JSON.stringify(body),
  });
}

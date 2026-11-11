export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: "customer" | "admin";
}

const STORAGE_AUTH_TOKEN_KEY = "seahorse_simulated_auth_token";
const STORAGE_AUTH_USER_KEY = "seahorse_simulated_auth_user";

export function getSimulatedAuthToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(STORAGE_AUTH_TOKEN_KEY);
}

export function setSimulatedAuthSession(token: string, user: AuthUser): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_AUTH_TOKEN_KEY, token);
  localStorage.setItem(STORAGE_AUTH_USER_KEY, JSON.stringify(user));
}

export function clearSimulatedAuthSession(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_AUTH_TOKEN_KEY);
  localStorage.removeItem(STORAGE_AUTH_USER_KEY);
}

export function isUserAuthenticated(): boolean {
  return Boolean(getSimulatedAuthToken());
}

export function getSimulatedUser(): AuthUser | null {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem(STORAGE_AUTH_USER_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as AuthUser;
  } catch {
    return null;
  }
}

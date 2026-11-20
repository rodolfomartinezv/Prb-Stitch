import type { CustomOrderDto, CustomOrderRequest } from "@seahorse/shared";
import { OrderRepository } from "../repositories/order.repository.js";

export class CustomOrderService {
  constructor(private readonly orderRepository = new OrderRepository()) {}

  async submitCustomOrder(input: CustomOrderRequest): Promise<CustomOrderDto> {
    return this.orderRepository.createCustomOrder(input);
  }
}


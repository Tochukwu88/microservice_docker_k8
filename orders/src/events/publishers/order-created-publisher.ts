import { Publisher, OrderCreatedEvent, Subjects } from "@tochukwudev/shared";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}

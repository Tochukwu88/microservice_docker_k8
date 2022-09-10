import { Subjects, Publisher, OrderCancelledEvent } from "@tochukwudev/shared";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}

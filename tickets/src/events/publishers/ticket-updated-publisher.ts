import { Publisher, Subjects, TicketUpdatedEvent } from "@tochukwudev/shared";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}

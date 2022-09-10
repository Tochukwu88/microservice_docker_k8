import { Publisher, Subjects, TicketCreatedEvent } from "@tochukwudev/shared";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}

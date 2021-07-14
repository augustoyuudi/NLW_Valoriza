import { Request, Response } from "express";
import { ListReceiverComplimentsService } from "@service/Compliments/ListReceiverComplimentsService";

class ListReceiverComplimentsController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;
    const listReceiverComplimentsService = new ListReceiverComplimentsService();
    const compliments = await listReceiverComplimentsService.execute(user_id);

    return response.json(compliments);
  }
}
export { ListReceiverComplimentsController }
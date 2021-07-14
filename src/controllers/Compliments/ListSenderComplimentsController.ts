import { Request, Response } from "express";
import { ListSenderComplimentsService } from "@service/Compliments/ListSenderComplimentsService";

class ListSenderComplimentsController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;
    const listSenderComplimentsService = new ListSenderComplimentsService();
    const compliments = await listSenderComplimentsService.execute(user_id);

    return response.json(compliments);
  }
}

export { ListSenderComplimentsController }
import { comments } from "../data";

export async function GET(
  //不用的话，加一个_
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const coment = comments.find((coment) => {
    return coment.id === parseInt(id);
  });
  return Response.json(coment);
}

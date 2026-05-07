import { writeFile } from "fs/promises";
import path from "path";
export async function POST(req: Request){const data=await req.formData();const file=data.get("file") as File;const bytes=Buffer.from(await file.arrayBuffer());const p=path.join(process.cwd(),"public/uploads",file.name);await writeFile(p,bytes);return Response.json({filePath:`/uploads/${file.name}`});}

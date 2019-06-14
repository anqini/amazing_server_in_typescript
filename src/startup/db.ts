import mongoose from "mongoose";
import config from "config";

export default async () => {
	const db: string = config.get('db');
	mongoose.connect(db, { useNewUrlParser: true })
		.then(() => console.log("connected to MongoDB..."))
		.catch((err: any) => console.error(err));
}
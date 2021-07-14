import {
	Application,
	Router,
	send,
	Status,
} from "https://deno.land/x/oak/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";

const router = new Router();

let pollStats = {
	amountSOAP: 0,
	amountREST: 0,
	amountRPC: 0,
	amountPollsubmissions: 0,
};

router
	.post("/pollSub", async (ctx: any) => {
		const body = await ctx.request.body();
		console.log(body);
		const content: PollSubmission = await body.value;
		//console.log(formData);

		//let content: PollSubmission = JSON.parse(await req.text());
		console.log(content);
		pollStats.amountPollsubmissions++;
		if (content.didUseREST) pollStats.amountREST++;
		if (content.didUseRPC) pollStats.amountRPC++;
		if (content.didUseSOAP) pollStats.amountSOAP++;
		console.log(pollStats);
		ctx.response.status = Status.OK;
		ctx.response.body = "Thanks for submitting :)";
		return;
	})

	.get("/pollSub", async (ctx: any) => {
		ctx.response.status = Status.OK;
		ctx.response.body = JSON.stringify(pollStats);
		ctx.response.type = "json"
		return;
		//req.respond({ status: 200, body: JSON.stringify(pollStats) });
	});

const app = new Application();
app.use(oakCors());
app.use(router.routes());
console.info("CORS-enabled web server listening on port 8000");
await app.listen({ port: 8000 });

interface PollSubmission {
	didUseREST: boolean;
	didUseSOAP: boolean;
	didUseRPC: boolean;
}

import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt'


const app = new Hono()



app.post('/api/v1/signup', async (c) => {
	const prisma = new PrismaClient({
    //@ts-ignore
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());

	const body = await c.req.json();
	try {
		const user = await prisma.user.create({
			data: {
				email: body.email,
				password: body.password
			}
		});
    
		const jwt = await sign({ id: user.id },"mysecret");
		return c.json({ jwt });
	} catch(e) {
		c.status(403);
		return c.json({ error: "error while signing up" });
	}
})
app.post('/api/v1/signin', async (c) => {
  const body = await c.req.parseBody()
  
})
app.post('/api/v1/blog', async (c) => {
  const body = await c.req.parseBody()
  // ...
})
app.put('/api/v1/blog', async (c) => {
  const body = await c.req.parseBody()
  // ...
})
app.get('/api/v1/blog/:id', async (c) => {
  const body = await c.req.parseBody()
  // ...
})



export default app

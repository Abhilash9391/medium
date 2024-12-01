import { Hono } from 'hono'


export const blogRouter  = new Hono<{
    Bindings : {
      DATABASE_URL : string;
      JWT_SECRET : string;}
  }>()



blogRouter.post('/', async (c) => {
    const body = await c.req.parseBody()
    // ...
  })
blogRouter.put('/', async (c) => {
    const body = await c.req.parseBody()
    // ...
  })
blogRouter.get('/:id', async (c) => {
    const body = await c.req.parseBody()
    // ...
  })
blogRouter.get('/bulk', async (c) => {
    const body = await c.req.parseBody()
    // ...
  })
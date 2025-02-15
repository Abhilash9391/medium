import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign,verify } from 'hono/jwt'


export const blogRouter  = new Hono<{
    Bindings : {
      DATABASE_URL : string;
      JWT_SECRET : string;},
      Variables : {
        userId : string;
      }
  }>()


blogRouter.use('/*',async(c,next)=>{
const authHeader = c.req.header("Authorization")||""
const user = await  verify(authHeader,"jwtsecret");
if(user){
    //@ts-ignore
    c.set("userId" ,user.id);
    next();
}
else{
    c.status(411)
    return c.json({
        msg : "invalid jwt||your not logged in"
    })
}

   
})


blogRouter.post('/', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL	,
  }).$extends(withAccelerate());
  const authId = c.get("userId")

  const body = await c.req.json();
  try{
    const blog = await prisma.post.create({
        data : {
            title : body.title,
            content : body.content,
            authorId : authId

        }
    })
    return c.json({
        id : blog.id
    })
  }
   catch(e){
    c.status(403);
    console.log(e)
		return c.json({ error: "error while posting blog" });
   }


  })
blogRouter.put('/', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL	,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  try{
    const blog = await prisma.post.update({
       where  : {
        id :  body.id
       },
       data : {
            title : body.title,
            content : body.content
            

        }
    })
    return c.json({
        id : blog.id
    })
  }
   catch(e){
    c.status(403);
		return c.json({ error: "error while posting blog" });
   }

  })
blogRouter.get('/:id', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL	,
  }).$extends(withAccelerate());

  const id = await c.req.param("id");
  try{
    const blog = await prisma.post.findFirst({
       where  : {
        id :  id
       }
       
    })
    return c.json({
         blog
    })
  }
   catch(e){
    c.status(411);
		return c.json({ error: "error while fetching  blog" });
   }

    
  })
blogRouter.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL	,
  }).$extends(withAccelerate());
const blogs = await prisma.post.findMany()
return c.json({blogs})
  })
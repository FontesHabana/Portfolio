import { defineCollection,z } from "astro:content";
import { title } from "framer-motion/client";
//z -> zod schema

const projects=defineCollection({
    schema: z.object({
        title:z.string(),
        imgbg:z.string(),
        imgfront:z.string(),
        deploy:z.string(),
        github:z.string(),
        tech:z.array(z.string()),
        main:z.boolean().default(false),

    }),
});

export const collections={projects}
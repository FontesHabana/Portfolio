import { defineCollection,z } from "astro:content";
import { title } from "framer-motion/client";
//z -> zod schema

const projects=defineCollection({
    schema: z.object({
        title:z.string(),
        imgbg:z.string(),
        imgfront:z.string(),
        deploy:z.string().nullable(),
        github:z.string().nullable(),
        tech:z.array(z.string()),
        gallery:z.array(z.string()),
        main:z.boolean().default(false),

    }),
});

const work=defineCollection({
    schema:z.object({
        company:z.string(),
        position:z.string(),
        startdate:z.string(),
        enddate:z.string(),
        achivements:z.array(z.string().optional()),

    })
});

const studies=defineCollection({
    schema:z.object({
        company:z.string(),
        level:z.string(),
        startdate:z.string(),
        enddate:z.string(),
        achivements:z.array(z.string().optional()),

    })
});

export const collections={projects, work,studies}



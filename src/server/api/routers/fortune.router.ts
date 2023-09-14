import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

import { getFortune } from "../services/fortune.service";

export const fortuneRouter = createTRPCRouter({
  getFortune: publicProcedure
    .mutation(async () => {
      return await getFortune();
    })

});

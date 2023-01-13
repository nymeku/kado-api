import { PrismaClient } from "@prisma/client"

//Updated ftom https://www.prisma.io/docs/guides/database/troubleshooting-orm/help-articles/nextjs-prisma-client-dev-practices#solution

declare global {
	// allow global `var` declarations
	// eslint-disable-next-line no-var, no-unused-vars
	var prisma: PrismaClient | undefined
}

const prisma =
	global.prisma ||
	new PrismaClient({
		log: ["error"],
	})

export default prisma

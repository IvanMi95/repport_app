import {  pgTable, serial, text } from "drizzle-orm/pg-core";

export const users = pgTable("users",{
    id: serial("id").primaryKey(),
    name:text("name"),
    surname:text("surname")
})

export const repport = pgTable("repport",{
    id: serial("id").primaryKey(),
    title:text("name"),
    hours:text("surname")
})

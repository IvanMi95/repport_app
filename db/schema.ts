import {
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const company = pgTable("company", {
  id: serial("company_id").primaryKey(),
  name: varchar("name", { length: 256 }),
});
export const users = pgTable("users", {
  email: varchar("email", { length: 256 }).primaryKey(),
  companyId: serial("company_id").references(() => company.id),
  name: varchar("name", { length: 256 }),
  surname: varchar("surname", { length: 256 }),
  passwordHash: varchar("passwordHash", { length: 256 }),
  lastLogin: timestamp("last_login").defaultNow(),
});

export const repport = pgTable("repport", {
  reportId: serial("report_id").primaryKey(),
  title: varchar("title", { length: 256 }),
  content: text("content"),
  minutes: integer("minutes"),
  submissionDate: timestamp("submission_date").defaultNow(),
});

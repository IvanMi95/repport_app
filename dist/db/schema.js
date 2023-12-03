"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.repport = exports.users = exports.company = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.company = (0, pg_core_1.pgTable)("company", {
    id: (0, pg_core_1.serial)("company_id").primaryKey(),
    name: (0, pg_core_1.varchar)("name", { length: 256 }),
});
exports.users = (0, pg_core_1.pgTable)("users", {
    email: (0, pg_core_1.varchar)("email", { length: 256 }).primaryKey(),
    companyId: (0, pg_core_1.serial)("company_id").references(() => exports.company.id),
    name: (0, pg_core_1.varchar)("name", { length: 256 }),
    surname: (0, pg_core_1.varchar)("surname", { length: 256 }),
    passwordHash: (0, pg_core_1.varchar)("passwordHash", { length: 256 }),
    lastLogin: (0, pg_core_1.timestamp)("last_login").defaultNow(),
});
exports.repport = (0, pg_core_1.pgTable)("repport", {
    reportId: (0, pg_core_1.serial)("report_id").primaryKey(),
    title: (0, pg_core_1.varchar)("title", { length: 256 }),
    content: (0, pg_core_1.text)("content"),
    minutes: (0, pg_core_1.integer)("minutes"),
    submissionDate: (0, pg_core_1.timestamp)("submission_date").defaultNow(),
});

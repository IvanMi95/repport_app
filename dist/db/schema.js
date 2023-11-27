"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.repport = exports.users = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.users = (0, pg_core_1.pgTable)("users", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    name: (0, pg_core_1.text)("name"),
    surname: (0, pg_core_1.text)("surname")
});
exports.repport = (0, pg_core_1.pgTable)("repport", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    title: (0, pg_core_1.text)("name"),
    hours: (0, pg_core_1.text)("surname")
});

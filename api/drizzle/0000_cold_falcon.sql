CREATE TABLE IF NOT EXISTS "company" (
	"company_id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "repport" (
	"report_id" serial PRIMARY KEY NOT NULL,
	"title" varchar(256),
	"content" text,
	"minutes" integer,
	"submission_date" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"email" varchar(256) PRIMARY KEY NOT NULL,
	"company_id" serial NOT NULL,
	"name" varchar(256),
	"surname" varchar(256),
	"passwordHash" varchar(256),
	"last_login" timestamp DEFAULT now()
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "users" ADD CONSTRAINT "users_company_id_company_company_id_fk" FOREIGN KEY ("company_id") REFERENCES "company"("company_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

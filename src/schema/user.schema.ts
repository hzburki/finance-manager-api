import { int, mysqlEnum, mysqlTable, timestamp, varchar } from "drizzle-orm/mysql-core";

export const users = mysqlTable('users', {
  id: int('id').autoincrement().primaryKey(),
  'email': varchar('email', { length: 255 }).unique().notNull(),
  'password': varchar('password', { length: 255 }).notNull(),
  'status': mysqlEnum('status', ['active', 'inactive']).default('active').notNull(),
  'createdAt': timestamp('created_at').defaultNow().notNull(),
  'updatedAt': timestamp('updated_at').defaultNow().notNull(),
  'deletedAt': timestamp('deleted_at'),
})
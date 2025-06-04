-- CreateTable
CREATE TABLE "list" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "done" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "list_pkey" PRIMARY KEY ("id")
);

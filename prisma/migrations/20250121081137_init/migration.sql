-- CreateTable
CREATE TABLE "Template" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "title" TEXT NOT NULL DEFAULT 'Title',
    "content" TEXT NOT NULL DEFAULT 'Thank you for joining XYZ Company! We''re excited to have you on board. Explore our services and stay tuned for updates tailored just for you. If you have any questions, feel free to reply to this email—we''re here to help!',
    "footer" TEXT NOT NULL DEFAULT 'Best regards, The XYZ Company Team',
    "imageUrl" TEXT NOT NULL DEFAULT 'https://imgs.search.brave.com/qqEbaONGfW1-dtR9aaK7euODkZZtho1RMahRVQNCM9k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mLmh1/YnNwb3R1c2VyY29u/dGVudDIwLm5ldC9o/dWJmcy80OTg4ODcy/L2FkZGl0aW9uYWwt/aHVic3BvdC1hY2Nv/dW50LWdsb2JlLnBu/Zw',
    "html" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Template_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserTemplate" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "templateId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "footer" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "html" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserTemplate_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserTemplate_userId_templateId_key" ON "UserTemplate"("userId", "templateId");

-- AddForeignKey
ALTER TABLE "UserTemplate" ADD CONSTRAINT "UserTemplate_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "Template"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

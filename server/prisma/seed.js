import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function seed() {
  await prisma.post.deleteMany();
  await prisma.user.deleteMany();
  const hamilton = await prisma.user.create({ data: { name: "Hamilton" } });
  const washingon = await prisma.user.create({ data: { name: "Washingon" } });

  const post1 = await prisma.post.create({
    data: {
      body: "It may be a reflection on human nature, that such devices should be necessary to control the abuses of government. But what is government itself, but the greatest of all reflections on human nature? If men were angels, no government would be necessary. If angels were to govern men, neither external nor internal controls on government would be necessary. In framing a government which is to be administered by men over men, the great difficulty lies in this: you must first enable the government to control the governed; and in the next place oblige it to control itself.  A dependence on the people, is no doubt, the primary control on the government; but experience has taught mankind the necessity of auxiliary precautions. ",
      title: "Post 1",
    },
  });
  const post2 = await prisma.post.create({
    data: {
      body: "I am sure there never was a people, who had more reason to acknowledge a divine interposition in their affairs, than those of the United States; and I should be pained to believe, that they have forgotten that agency, which was so often manifested during our revolution, or that they failed to consider the omnipotence of that God, who is alone able to protect them.",
      title: "Post 2",
    },
  });

  const comment1 = await prisma.comment.create({
    data: {
      message: "I am a root comment",
      userId: hamilton.id,
      postId: post1.id,
    },
  });

  const comment2 = await prisma.comment.create({
    data: {
      parentId: comment1.id,
      message: "I am a nested comment",
      userId: washingon.id,
      postId: post1.id,
    },
  });

  const comment3 = await prisma.comment.create({
    data: {
      message: "I am another root comment",
      userId: washingon.id,
      postId: post1.id,
    },
  });
}

seed();

import { Post, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createPost = async (data: Post): Promise<Post> => {
  const result = await prisma.post.create({
    data,
    include: {
      author: true,
      category: true,
    },
  });
  return result;
};

const getPosts = async (options: any) => {
  const { sortBy, sortOrder, searchTerm, page, limit } = options;
  const skip = parseInt(limit) * parseInt(page) - parseInt(limit);
  const take = parseInt(limit);

  return await prisma.$transaction(async (tx) => {
    // tx: name can be anything
    const result = await tx.post.findMany({
      skip,
      take,
      include: {
        author: true,
        category: true,
      },
      orderBy:
        sortBy && sortOrder
          ? {
              [sortBy]: sortOrder,
            }
          : { createdAt: "desc" },

      where: {
        title: {
          contains: searchTerm,
          mode: "insensitive",
        },
      },
    });

    const total = await tx.post.count();
    return {
      data: result,
      total,
    };
  });
};

export const postService = {
  createPost,
  getPosts,
};

export async function findOrCreateGoogleUser(data, prisma) {
    let user = await prisma.user.findUnique({
        where: { email: data.email }
    });
    if (!user) {
        user = await prisma.user.create({
            data: {
                email: data.email,
                name: data.name,
                googleId: data.googleId,
                avatarUrl: data.picture
            }
        });
    }
    return user;
}
//# sourceMappingURL=user.service.js.map
export const Privileges = {
    MEMBER: "member",
    ADMIN: "admin",
    SUPERADMIN: "superadmin",
};

export const getProperPrivilegeName = (privilege) => {
    return privilege.charAt(0).toUpperCase() + privilege.substring(1);
}
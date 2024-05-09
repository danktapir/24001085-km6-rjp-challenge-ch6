export const Privileges = {
    MEMBER: "member",
    ADMIN: "admin",
    SUPERADMIN: "superadmin",
};

export const getProperPrivilegeName = (privilege) => {
    if (privilege === Privileges.SUPERADMIN) {
        return "Super Admin";
    } else {
        return privilege?.charAt(0).toUpperCase() + privilege?.substring(1);
    }
}
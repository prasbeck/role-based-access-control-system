export const ALL_PERMISSIONS = [
  

  //users permissions
  'users:roles:write', // add role to a user
  'users:roles:delete', // remove a role from user

  //roles
  "roles:write",

  //posts permissions
  'posts:write',
  'posts:read',
  'post:delete',
  'post:edit-own'
  
] as const;


export const PERMISSIONS = ALL_PERMISSIONS.reduce((acc, permission) => {
  acc[permission] = permission;

  return acc;
}, {} as Record<(typeof ALL_PERMISSIONS)[number], (typeof ALL_PERMISSIONS)[number]>);

export const USER_ROLE_PERMISSIONS = [
  PERMISSIONS["posts:write"],
  PERMISSIONS["posts:read"],
];

export const SYSTEM_ROLES = {
  SUPER_ADMIN: 'SUPER_ADMIN',
  APPLICATION_USER: 'APPLICATION_USER'
}


type RouteNameType = 'home' | 'about' | 'contact' | 'registrationForm' | 'familyDetailsForm' | 'personalForm'
type RouteNavNameType = Record<RouteNameType, string>

export const RouteNavName: RouteNavNameType = {
    home: '/',
    about: '/about',
    contact: '/contact',
    registrationForm: '/register',
    familyDetailsForm: '/register/familyForm',
    personalForm: '/register/personalForm',
};
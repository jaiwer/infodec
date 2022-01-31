export interface Perfil {
    id:         number;
    first_name: string;
    last_name:  string;
    email:      string;
    gender:     Gender;
    avatar:     string;
}

export enum Gender {
    Female = "Female",
    Male = "Male",
} 

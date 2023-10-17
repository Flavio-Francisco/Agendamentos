export declare global {
  import { CreateCategory } from "./../screens/CreateCategory/index";

  namespace ReactNavigation {
    interface RootParamList {
      Login: undefined;
      UpdatePassWord: undefined;
      PerfilTeacher: {
        avatar: string;
        name: string;
        rating: Number;
        id: string;
        modal: boolean;
      };
      Agenda: undefined;

      Home: undefined;
      Options: {
        modal: boolean;
        isChecked: boolean;
      };
      StarTeacher: {
        avatar: string;
        name: string;
        rating: Number;
        id: string;
        modal: boolean;
      };

      StarRating: {
        avatar: string;
        name: string;
        rating: number;
      };
      Schedule: undefined;
      Register: undefined;
    }
  }
}

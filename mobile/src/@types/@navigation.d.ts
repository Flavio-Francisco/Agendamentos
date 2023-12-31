export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Login: undefined;
      UpdatePassWord: undefined;
      UserUpdate: undefined;
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
        id: string;
        avatar: string;
        name: string;
        rating: number;
      };
      Schedule: undefined;
      Register: undefined;
      Payment: undefined;
    }
  }
}

export interface IContent {
  id?: string;
  size?: "sm" | "lg";
  align?: "center" | "left" | "right";
  picture?: {
    url?: string;
    file?: File;
  };
  text?: {
    content?: any;
  };
}

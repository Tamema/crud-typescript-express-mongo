import mongoose, {Document, Schema} from "mongoose";

export interface UserInterface {
  firstName: string,
  lastName: string,
  email: string,
  password: string
}

export interface UserInterfaceModel extends UserInterface, Document {}

const UserSchema: Schema = new Schema(
  {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: false
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: false
    }
  }
)

export default mongoose.model<UserInterfaceModel>('User', UserSchema)
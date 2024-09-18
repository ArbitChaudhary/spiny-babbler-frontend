import { createContext, useEffect, useState } from 'react';
import { IChildrenProps } from '../common/interfaces/children-props.interface';
import { userService } from '../services/services/users.service';

export interface IUserContext {
    //TODO: need to specify type here
    user: any
}

export const UserContext = createContext<IUserContext>(undefined);

export const UserProvider: React.FC<IChildrenProps> = ({ children }) => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const fetchProfile = async () => {
            const response = await userService.getProfile()

            return response
        }

        fetchProfile().then(profile => {
            setUser(profile)
        })
    }, [])

    return (
        <UserContext.Provider value={{ user }} >
            {children}
        </UserContext.Provider>
    )
};

export const UserConsumer = UserContext.Consumer;

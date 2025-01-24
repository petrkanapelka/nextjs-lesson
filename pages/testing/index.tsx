import { PageWrapper } from 'components/PageWrapper/PageWrapper';
import { GetStaticProps } from 'next';
import path from 'path';
import fs from 'fs/promises'

interface Address {
    street: string;
    city: string;
    state: string;
    zip: string;
}

interface User {
    id: number;
    name: string;
    email: string;
    age: number;
    address: Address;
}

interface Props {
    users: User[];
}

export const getStaticProps: GetStaticProps = async () => {
    const getParsedData = async (): Promise<User[]> => {
        const filePath = path.join(process.cwd(), 'public', 'staticData.json')

        try {
            const jsonData = await fs.readFile(filePath)
            return JSON.parse(jsonData.toString()) as User[];
        } catch (error) {
            return [];
        }
    }

    const data = await getParsedData();

    return {
        props: {
            users: data
        }
    };
};
import styled from 'styled-components';
import { getLayout } from 'components/Layout/BaseLayout/BaseLayout';

const UserList = styled.ul`
    list-style-type: none;
    padding: 0;
`;

const UserListItem = styled.li`
    background-color: #f9f9f9;
    margin: 10px 0;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const UserName = styled.h2`
    margin: 0 0 10px;
    font-size: 1.5em;
    color: #333;
`;

const UserDetail = styled.p`
    margin: 5px 0;
    color: #666;
`;

const TestingPage: React.FC<Props> = ({ users }) => {
    return (
        <PageWrapper>
            <h1>User List</h1>
            <UserList>
                {users.map(user => (
                    <UserListItem key={user.id}>
                        <UserName>{user.name}</UserName>
                        <UserDetail>Email: {user.email}</UserDetail>
                        <UserDetail>Age: {user.age}</UserDetail>
                        <UserDetail>Address: {user.address.street}, {user.address.city}, {user.address.state} {user.address.zip}</UserDetail>
                    </UserListItem>
                ))}
            </UserList>
        </PageWrapper>
    );
};

(TestingPage as any).getLayout = getLayout


export default TestingPage;
import { Query, Resolver, Mutation, Args } from '@nestjs/graphql';

@Resolver()
export class MessagesResolver {
    messageDataInDb = [
        { id: 0, description: 'The seed message' },
    ];
    @Query()
    messages() {
        return this.messageDataInDb;
    }
    @Mutation()
    createMessage(@Args('description') description: string) {
        const id = this.messageDataInDb.length;
        const newMessage = { id, description };
        this.messageDataInDb.push(newMessage);
        return newMessage;
    }
}
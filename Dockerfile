FROM node

WORKDIR /app

COPY ./package.json package.json
COPY ./prisma prisma

RUN yarn

COPY . .

RUN yarn prisma db pull
RUN yarn prisma generate
RUN yarn build

EXPOSE 3000

CMD ["yarn","start"]
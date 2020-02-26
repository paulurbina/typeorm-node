import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { User } from '../entity/user'

export const getUsers = async (
    req: Request,
    res: Response
    ): Promise<Response> => {
    const users = await getRepository(User).find()
    return res.json(users)
}

export const getUser = async (
    req: Request,
    res: Response
    ): Promise<Response> => {
    const users = await getRepository(User).findOne(req.params.id)
    return res.json(users)
}

export const createUser = async (
    req: Request,
    res: Response
    ): Promise<Response> => {
        const newUser = await getRepository(User).create(req.body)
        const result = await getRepository(User).save(newUser)
        return res.json(result)
    }

    export const updateUser = async (
        req: Request,
        res: Response
        ): Promise<Response> => {
            const user = await getRepository(User).findOne(req.params.id)
            if (user) {
                await getRepository(User).merge(user, req.body)
                const result = await getRepository(User).save(user)
                return res.json(result)
            }

            return res.status(404).json({
                msg: 'not user foind'
            })
        }

        export const deleteUser = async (
            req: Request,
            res: Response
            ) :Promise<Response> => {
            const result = await getRepository(User).delete(req.params.id)
            return res.json(result)
        }
        
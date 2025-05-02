import { Controller, Post, Get, Put, Delete, Patch,  Body, Param, ParseIntPipe } from "@nestjs/common";
import { CreatUserDTO } from "./dto/create-user.dto";
import { UpdatePutUserDTO } from "./dto/update-put-user.dto";
import { UpdatePatchUserDTO } from "./dto/update-patch-user.dto";


@Controller('users')
export class UserController {

    @Post()
    async create(@Body() body: CreatUserDTO) {

    return {body};

    }

    @Get()
    async list(){
        return {users:[]}
    }

    @Get(':id')
    async show(@Param() params){
        return {user:{}, params}
    }

    @Put(':id')
    async update(@Body() {email,name,password}: UpdatePutUserDTO, @Param() params){
        return{
            method:'put',
            email,name,password,
            params
        }
    }    

    @Patch(':id')
    async updatePartial(@Body(){email,name,password}: UpdatePatchUserDTO, @Param() params){
        return{
            method:'patch',
            email,name,password,
            params
        }    
    }

    @Delete(':id')
    async delete(@Param('id',ParseIntPipe) id:number){
        return{
            method:'delete',
            id
        }
    }
}
import { inject, injectable } from 'tsyringe'
import Tool from '../infra/typeorm/entities/Tool'
import IToolsRepository from '../repositories/IToolsRepository'

@injectable()
class GetToolsService {
  constructor(
    @inject('ToolsRepository')
    private toolsRepository: IToolsRepository,
  ) {}

  public async execute(tag?: string): Promise<Tool[]> {
    const tools = await this.toolsRepository.getAll(tag)

    return tools
  }
}

export default GetToolsService

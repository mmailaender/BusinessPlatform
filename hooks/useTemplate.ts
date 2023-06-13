import { useRouter } from 'next/navigation';
import {
  Block,
  BlockInput,
  Query,
  TemplateInput,
} from '@/fqlx-generated/typedefs';
import { useQuery } from 'fqlx-client';

const useTemplate = () => {
  const query = useQuery<Query>();
  const router = useRouter();

  const createTemplate = async () => {
    try {
      const res = await query.Template.create({
        name: 'Untitled',
        blocks: [],
      }).exec();

      if (res.id) {
        console.log('Template created:', res);
        router.push(`/templates/${res.id}`);
      }
    } catch (error) {
      console.error('Error creating template:', error);
    }
  };

  const duplicateTemplate = async (template: { blocks: any[]; name: any }) => {
    try {
      const blocksPromises = template.blocks.map((blockId: string) =>
        query.Block.byId(blockId).exec()
      );

      const resolvedBlocks = await Promise.all(blocksPromises);

      const duplicatedBlocks = [];

      for (const resolvedBlock of resolvedBlocks) {
        let duplicatedBlockId;

        if (
          resolvedBlock.category === 'Section' ||
          resolvedBlock.category === 'SubSection'
        ) {
          const res = await query.Block.create({
            content: resolvedBlock.content,
          } as BlockInput).exec();

          duplicatedBlockId = res.id;
        } else {
          duplicatedBlockId = resolvedBlock.id;
        }

        duplicatedBlocks.push(duplicatedBlockId);
      }

      if (duplicatedBlocks.length > 0) {
        const res = await query.Template.create({
          name: `${template.name} (Copy)`,
          blocks: duplicatedBlocks as unknown as Block[],
        }).exec();

        console.log('Template duplicated:', res);
      }
    } catch (error) {
      console.error('Error duplicating template:', error);
    }
  };

  const deleteTemplate = async (id: string) => {
    try {
      const res = await query.Template.byId(id).delete().exec();

      console.log('Template deleted:', res);
    } catch (error) {
      console.error('Error deleting template:', error);
    }
  };

  const fetchTemplateName = async (id: string) => {
    try {
      const res = await query.Template.byId(id).exec();
      return res.name;
    } catch (error) {
      console.error('Error fetching template name:', error);
    }
  };

  const updateTemplateName = async (id: string, value: any) => {
    try {
      await query.Template.byId(id)
        .update({
          name: value,
        } as TemplateInput)
        .exec();

      console.log('Template name updated:', value);
    } catch (error) {
      console.error('Error updating template name:', error);
      // Handle the error as needed
    }
  };

  const fetchTemplate = async (templateId: string) => {
    try {
      const templateRes = await query.Template.byId(templateId).exec();
      const template: any[] = [];

      const blocksPromises = templateRes.blocks.map((blockId) =>
        query.Block.byId(blockId as unknown as string).exec()
      );

      const resolvedBlocks = await Promise.all(blocksPromises);

      resolvedBlocks.forEach((block) => {
        const blockData = JSON.parse(block.content);
        template.push({ ...blockData[0], id: block.id }, ...blockData.slice(1));
      });

      return { template, blocks: templateRes.blocks };
    } catch (error) {
      console.error('Error fetching template:', error);
      // Handle the error as needed
    }
  };

  return {
    fetchTemplateName,
    createTemplate,
    duplicateTemplate,
    deleteTemplate,
    updateTemplateName,
    fetchTemplate
  };
};

export default useTemplate;

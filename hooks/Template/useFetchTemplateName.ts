import { Query } from '@/fqlx-generated/typedefs';
import { useQuery } from 'fqlx-client';

const useFetchTemplateName = () => {
  const query = useQuery<Query>();

  const fetchTemplateName = async (id: string) => {
    try {
      const res = await query.Template.byId(id).exec();
      return res.name;
    } catch (error) {
      console.error('Error fetching template name:', error);
    }
  };

  return fetchTemplateName;
};

export default useFetchTemplateName;

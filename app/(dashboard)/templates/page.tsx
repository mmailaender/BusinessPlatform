'use client';

import { CreateTemplate, TemplateFile } from '@/components/File';
import { Query } from '@/fqlx-generated/typedefs';
import { useQuery } from 'fqlx-client';

import { View } from 'reshaped';

const page = () => {
  const query = useQuery<Query>();
  const templates = query.Template.all().exec();

  return (
    <View direction='row'>
      <View.Item columns={{ xl: 2, l: 3, m: 4, s: 6 }}>
        <CreateTemplate />
      </View.Item>

      {templates.data.map((template) => (
        <View.Item key={template.id} columns={{ xl: 2, l: 3, m: 4, s: 6 }}>
          <TemplateFile template={template} />
        </View.Item>
      ))}
    </View>
  );
};

export default page;

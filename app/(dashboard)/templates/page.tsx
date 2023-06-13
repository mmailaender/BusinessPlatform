'use client';

import { CreateTemplate, TemplateFile } from '@/app/(dashboard)/File';
import { Query } from '@/fqlx-generated/typedefs';
import { useQuery } from 'fqlx-client';

import { View } from 'reshaped';

export default function TemplatePage() {
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
}

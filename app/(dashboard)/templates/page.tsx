'use client';

import { useSearchParams } from 'next/navigation';
import { View } from 'reshaped';
import { useQuery } from 'fqlx-client';
import { Query } from '@/fqlx-generated/typedefs';
import { TemplateFile } from '../TemplateFile';
import { CreateTemplate } from '../CreateTemplate';

export default function TemplatePage() {
  const query = useQuery<Query>();
  const search = useSearchParams();
  const searchText = search.get('search')?.toLowerCase();
  const templates = query.Template.all().order('desc(.ts)').exec();
  const filterTemplate = query.Template.all()
    .where(`(a) => a.name.toLowerCase().includes("${searchText}")`)
    .order('asc(.name)')
    .exec();

  const filteredTemplates = search.get('search') ? filterTemplate : templates;

  return (
    <View direction='row'>
      <View.Item columns={{ xl: 2, l: 3, m: 4, s: 6 }}>
        <CreateTemplate />
      </View.Item>

      {filteredTemplates.data.map((template) => (
        <View.Item key={template.id} columns={{ xl: 2, l: 3, m: 4, s: 6 }}>
          <TemplateFile template={template} />
        </View.Item>
      ))}
    </View>
  );
}

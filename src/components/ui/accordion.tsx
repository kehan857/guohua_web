import React, { useState, createContext, useContext } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AccordionContextType {
  openItems: string[];
  toggleItem: (value: string) => void;
  type: 'single' | 'multiple';
}

const AccordionContext = createContext<AccordionContextType | undefined>(undefined);

interface AccordionProps {
  type?: 'single' | 'multiple';
  children: React.ReactNode;
  className?: string;
}

const Accordion: React.FC<AccordionProps> = ({ type = 'single', children, className }) => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (value: string) => {
    if (type === 'single') {
      setOpenItems(openItems.includes(value) ? [] : [value]);
    } else {
      setOpenItems(
        openItems.includes(value)
          ? openItems.filter(item => item !== value)
          : [...openItems, value]
      );
    }
  };

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem, type }}>
      <div className={cn('space-y-2', className)}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

interface AccordionItemProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ children, className }) => {
  return (
    <div className={cn('border border-health-green-200 rounded-xl overflow-hidden', className)}>
      {children}
    </div>
  );
};

interface AccordionTriggerProps {
  children: React.ReactNode;
  className?: string;
}

const AccordionTrigger: React.FC<AccordionTriggerProps> = ({ children, className }) => {
  const context = useContext(AccordionContext);
  if (!context) throw new Error('AccordionTrigger must be used within Accordion');

  const parent = useContext(AccordionItemContext);
  if (!parent) throw new Error('AccordionTrigger must be used within AccordionItem');

  const { openItems, toggleItem } = context;
  const { value } = parent;
  const isOpen = openItems.includes(value);

  return (
    <button
      className={cn(
        'flex w-full items-center justify-between p-4 text-left font-medium text-gray-900 hover:bg-health-green-50 transition-colors',
        className
      )}
      onClick={() => toggleItem(value)}
    >
      {children}
      <ChevronDown
        className={cn(
          'h-4 w-4 shrink-0 text-health-green-600 transition-transform duration-200',
          isOpen && 'rotate-180'
        )}
      />
    </button>
  );
};

interface AccordionContentProps {
  children: React.ReactNode;
  className?: string;
}

const AccordionContent: React.FC<AccordionContentProps> = ({ children, className }) => {
  const context = useContext(AccordionContext);
  if (!context) throw new Error('AccordionContent must be used within Accordion');

  const parent = useContext(AccordionItemContext);
  if (!parent) throw new Error('AccordionContent must be used within AccordionItem');

  const { openItems } = context;
  const { value } = parent;
  const isOpen = openItems.includes(value);

  return (
    <div
      className={cn(
        'overflow-hidden transition-all duration-300',
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      )}
    >
      <div className={cn('p-4 pt-0 text-gray-600', className)}>
        {children}
      </div>
    </div>
  );
};

const AccordionItemContext = createContext<{ value: string } | undefined>(undefined);

const AccordionItemWithContext: React.FC<AccordionItemProps> = ({ value, children, className }) => {
  return (
    <AccordionItemContext.Provider value={{ value }}>
      <AccordionItem value={value} className={className}>
        {children}
      </AccordionItem>
    </AccordionItemContext.Provider>
  );
};

export { Accordion, AccordionItemWithContext as AccordionItem, AccordionTrigger, AccordionContent };
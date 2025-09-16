import { iconMap } from './icons';

/**
 * A dynamic icon component that renders an icon based on a name.
 *
 * This component looks up the requested icon in the `iconMap` and renders it,
 * passing through any additional props like `className` for styling.
 *
 * @example
 * // Renders the HiHomeModern icon with Tailwind CSS classes
 * <Icon name="home" className="h-6 w-6 text-blue-500" />
 *
 * @param {object} props The component props.
 * @param {keyof iconMap} props.name - The simple name of the icon to render (e.g., "home", "menu").
 * @param {string} [props.className] - Optional Tailwind CSS classes for styling.
 */
const Icon = ({ name, ...props }) => {
  // Look up the actual icon component in our map using the 'name' prop.
  const IconComponent = iconMap[name];

  // If no icon is found for the given name, it's good practice
  // to render nothing (or a default icon) to avoid errors.
  if (!IconComponent) {
    return null;
  }

  // Render the found icon component. The {...props} part is crucial—it
  // passes down any other props you gave to <Icon />, such as className,
  // onClick, etc., to the actual SVG icon component.
  return <IconComponent {...props} />;
};

export default Icon;